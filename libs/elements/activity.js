import Sensen, { SensenHTMLElement } from "../index.js.js";
/**
 * Scene Header
 */
export class SceneActivityHeader extends SensenHTMLElement {
    constructor() {
        super({});
    }
}
/**
 * Scene Body
 */
export class SceneActivityBody extends SensenHTMLElement {
    constructor() {
        super({});
    }
}
/**
 * Scene Footer
 */
export class SceneActivityMenu extends SensenHTMLElement {
    constructor() {
        super({});
    }
}
export function activityHeaderComponent() {
    return new Sensen.Component({
        name: 'activityHeader',
        template: `
    <div activity-header-goback >Go Back</div>
    <div activity-header-left ></div>
    <div activity-header-center ">{{ this.props.title }}</div>
    <div activity-header-right ></div>
        `,
        emit: {
            expressionRecorded: (record) => { },
            connected: (e) => {
                // console.warn('Component Connected', e.emit.props.title)
            }
        },
        appearance: {
            $self: [
                {
                    display: 'flex',
                    flexDirection: 'row'
                }
            ]
        },
        props: {
            title: 'default title',
            goBack: false,
        },
        state: {
            title: false,
        },
        methods: {
            goBack({ self, event }) {
            },
        }
    });
}
export function useScreenElements() {
    if (!customElements.get(`scene-header`)) {
        customElements.define(`scene-header`, SceneActivityHeader);
    }
    if (!customElements.get(`scene-body`)) {
        customElements.define(`scene-body`, SceneActivityBody);
    }
    if (!customElements.get(`scene-menu`)) {
        customElements.define(`scene-menu`, SceneActivityMenu);
    }
    return {
        component: {
            hedaer: activityHeaderComponent()
        }
    };
}
