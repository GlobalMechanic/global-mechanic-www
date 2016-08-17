import { Giot } from './engines'

const FixSize = Object.freeze({
  RESIZE_AND_ADJUST: 0,
  RESIZE: 1, //resize, keep ratio
  LOCKED: 2
})

const Engines = {
  GIOT: Giot
}

const Flow = Object.freeze({
  LRTB: 'left-right-top-bottom',
  LRBT: 'left-right-bottom-top',
  RLTB: 'right-left-top-bottom',
  RLBT: 'right-left-bottom-top'
})

const DefaultConfig = {

  animate: false,
  delay: 0, // slowdown active block;

  cellWidth: 100, // function(container) {return 100;}
  cellHeight: 100, // function(container) {return 100;}
  gutterX: 15, // width spacing between blocks;
  gutterY: 15, // height spacing between blocks;

  keepOrder: false,
  // selector: '> div',
  draggable: false,
  cacheSize: true, // caches the original size of block;

  engine: Engines.GIOT,
  fixSize: FixSize.RESIZE_AND_ADJUST, // resize + adjust = fill gap;
  flow: Flow.RLTB,

  onGapFound: function() {},
  onComplete: function() {},
  onResize: function() {},
  onBlockDrag: function() {},
  onBlockMove: function() {},
  onBlockDrop: function() {},
  onBlockReady: function() {},
  onBlockFinish: function() {},
  onBlockActive: function() {},
  onBlockResize: function() {}

}

export default class LayoutManager {

  constructor(config) {
    this.config = Object.assign(DefaultConfig, config || {})
    this.state = {
      blocks: {},
      matrix: {},
      holes: {}
    }
  }

  loadBlock() {
  }

  setBlock() {
  }

  showBlock() {
  }

  adjustBlock() {
  }

  adjustUnit() {
  }

  resetGrid(){
  }

  nestedGrid() {
  }

  setDraggable(){
  }

  setTransition(){
  }

  getFreeArea(){
  }

  setWallSize(){
  }

}

export { Engines, FixSize, Flow}
