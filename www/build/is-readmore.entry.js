import { r as registerInstance, h, f as Host } from './index-96e353eb.js';

const readmoreCss = "is-readmore{display:block}is-readmore .content{position:relative;width:100%;height:var(--height, 260px);overflow:hidden;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}is-readmore .content.active{height:auto;overflow:unset;position:unset;-webkit-transition:all 0.3s ease-in-out;transition:all 0.3s ease-in-out}is-readmore .content.active:before{display:none}is-readmore .content:before{background:-moz-linear-gradient(top, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.8) 40%, #ffffff 100%);background:-o-linear-gradient(top, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.8) 40%, #ffffff 100%);background:-webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(255, 255, 255, 0)), color-stop(40%, rgba(255, 255, 255, 0.8)), to(#ffffff));background:linear-gradient(to bottom, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.8) 40%, #ffffff 100%);background:-webkit-linear-gradient(top, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0.8) 40%, #ffffff 100%);height:45px;bottom:0;position:absolute;z-index:2;right:0;left:0;content:\"\"}is-readmore .content-toggle{display:-ms-flexbox;display:flex;width:100%;cursor:pointer}is-readmore .align-right{-ms-flex-pack:end;justify-content:flex-end}is-readmore .align-center{-ms-flex-pack:center;justify-content:center}is-readmore .align-left{-ms-flex-pack:start;justify-content:flex-start}";

const Readmore = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The options to config toggle text.
         */
        this.toggleOptions = {
            textOpen: 'Open',
            textClose: 'Close',
            textPosition: 'left',
            textClass: ''
        };
    }
    toggle() {
        this.contentExpanded = !this.contentExpanded;
    }
    setPosition() {
        if (this.toggleOptions.textPosition === 'right') {
            return 'align-right';
        }
        else if (this.toggleOptions.textPosition === 'center') {
            return 'align-center';
        }
        else {
            return 'align-left';
        }
    }
    componentDidLoad() {
        this.contentExpanded = false;
    }
    render() {
        return (h(Host, null, h("div", { class: {
                'content': true,
                'active': this.contentExpanded
            } }, h("slot", null)), h("div", { class: 'content-toggle ' + (this.setPosition()) + ' ' + this.toggleOptions.textClass, onClick: () => this.toggle() }, this.contentExpanded ? this.toggleOptions.textClose : this.toggleOptions.textOpen)));
    }
};
Readmore.style = readmoreCss;

export { Readmore as is_readmore };