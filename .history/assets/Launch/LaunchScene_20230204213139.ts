import { _decorator, Component, Node, EventMouse, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Launch')
export class Launch extends Component {

    @property({type: Label, visible: true})
    private _label: Label | null = null;

    start() {
        console.info("Start LaunchScene");
    }

    private handleClickButton(event: EventMouse) {
        console.info("Hello world!");
        this._label.string = "你好, 欢迎进入";
    }
}

