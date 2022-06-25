import {
  _decorator,
  Component,
  Node,
  resources,
  Sprite,
  ImageAsset,
  UITransformComponent,
  Size,
  SpriteFrame,
} from 'cc';
const { ccclass, property } = _decorator;

import { stageConfig } from '../../stage.config/stage.config';
import { resourcesLoad } from '../common/utils';


@ccclass('MainStage')
export class MainStage extends Component {
  // 关卡配置数据
  private stageConfig:StageConfig;
  async start() {
    console.log('start');
    this.stageConfig = stageConfig[0];

    //背景图
    const { background } = this.stageConfig;
    // 第一关配置数据
    const spriteFrame = (await resourcesLoad(
      `assets/${background}/spriteFrame`,
      SpriteFrame
    )) as SpriteFrame;

    const backgroundNode = this.node
      .getChildByName('Background')
      .getComponent(Sprite);

      backgroundNode.spriteFrame = spriteFrame;
  }
}
