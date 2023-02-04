import { _decorator, Component, Node, EventMouse } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Launch')
export class Launch extends Component {

    

    start() {
        console.info("Start LaunchScene");
    }

    private handleClickButton(event: EventMouse) {
        console.info("Hello world!");
    }
}

