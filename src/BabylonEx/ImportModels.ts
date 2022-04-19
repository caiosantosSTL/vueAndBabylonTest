import { Scene, Engine, FreeCamera, Vector3, HemisphericLight, MeshBuilder, SceneLoader, ArcRotateCamera, CubeTexture, PhotoDome } from '@babylonjs/core'
import "@babylonjs/loaders"

export class ImportModels {
    scene: Scene;
    engine: Engine;

    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true)
        this.scene = this.CreateScene()
        this.CreateObj2()

        this.engine.runRenderLoop(() => {
            this.scene.render()
        })
    }

    CreateScene(): Scene {
        const scene = new Scene(this.engine)

        //const camera = new FreeCamera("camera", new Vector3(0, 5, -15), this.scene)
        const camera = new ArcRotateCamera("Camera", 0, 0, 10, new Vector3(0,0,0), this.scene)
        camera.attachControl()
        // Enable mouse wheel inputs.
        camera.inputs.addMouseWheel();

        const hemiLight = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), this.scene)
        hemiLight.intensity = 0.8

        // skybox
        const dome = new PhotoDome(
            "testdome",
            "./textures/sky/cerulux1.png", {resolution: 32, size: 1000},
            scene
        )

        //const ground = MeshBuilder.CreateGround("ground", {width: 10, height: 10}, this.scene)


        return scene;
    }

    CreateObj(): void {
        SceneLoader.ImportMesh("", "./models/", "scene.glb", this.scene, (meshes) => {
            console.log("meshes", meshes);

        })
    }

    CreateObj2(): void {
        SceneLoader.ImportMesh("", "./models/", "montmap.glb", this.scene, (meshes) => {
            console.log("meshes", meshes);

        })
    }
}