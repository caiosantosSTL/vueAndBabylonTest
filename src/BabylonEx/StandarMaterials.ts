import {Scene, Engine, FreeCamera, Vector3, HemisphericLight, MeshBuilder, Texture, StandardMaterial} from '@babylonjs/core'

export class StandarMaterials {
    scene: Scene;
    engine: Engine;

    constructor(private canvas:HTMLCanvasElement){
        this.engine = new Engine(this.canvas, true)
        this.scene = this.CreateScene()

        this.engine.runRenderLoop(() => {
            this.scene.render()
        })
    }

    CreateScene():Scene {
        const scene = new Scene(this.engine)

        //camera
        const camera = new FreeCamera("camera", new Vector3(0, 1, -5), this.scene)
        camera.attachControl()
        camera.speed = 0.25

        //environment
        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), this.scene)
        hemiLight.intensity = 0.9

        //ground
        const ground = MeshBuilder.CreateGround("ground", {width: 10, height: 10}, this.scene)

        //ball
        const ball = MeshBuilder.CreateSphere("ball", {diameter: 1}, this.scene)
        ball.position = new Vector3(0, 1,0)

        //material
        ground.material = this.CreateGroundMaterial()
        ball.material = this.CreateBallMaterial()

        return scene;
    }

    CreateGroundMaterial():StandardMaterial{
        const groundMat = new StandardMaterial("groundMat", this.scene)
        const diffuseTex = new Texture("./textures/stone/Rock045_1K_Color.jpg", this.scene)

        const texArray: Texture[] = []

        /*diffuseTex.uScale = 3
        diffuseTex.vScale = 3*/

        groundMat.diffuseTexture = diffuseTex;
        texArray.push(diffuseTex)

        const normalTex = new Texture("./textures/stone/Rock045_1K_NormalGL.jpg", this.scene)
        groundMat.bumpTexture = normalTex
        texArray.push(normalTex)

        const aoTex = new Texture("./textures/stone/Rock045_1K_AmbientOcclusion.jpg", this.scene)
        groundMat.ambientTexture = aoTex
        texArray.push(aoTex)

        texArray.forEach((tex)=>{
            tex.uScale = 3
            tex.vScale = 3
        })

        

        return groundMat
    }

    CreateBallMaterial():StandardMaterial{
        const ballMat = new StandardMaterial("ballMat", this.scene)
        const diffuseTex = new Texture("./textures/brick/Bricks068_1K_Color.jpg", this.scene)

        const texArray: Texture[] = []

        /*diffuseTex.uScale = 3
        diffuseTex.vScale = 3*/

        ballMat.diffuseTexture = diffuseTex;
        texArray.push(diffuseTex)

        const normalTex = new Texture("./textures/brick/Bricks068_1K_NormalGL.jpg", this.scene)
        ballMat.bumpTexture = normalTex
        ballMat.invertNormalMapX = true
        ballMat.invertNormalMapY = true
        texArray.push(normalTex)

        const aoTex = new Texture("./textures/brick/Bricks068_1K_AmbientOcclusion.jpg", this.scene)
        ballMat.ambientTexture = aoTex
        texArray.push(aoTex)

        texArray.forEach((tex)=>{
            tex.uScale = 3
            tex.vScale = 3
        })

        

        return ballMat
    }



}