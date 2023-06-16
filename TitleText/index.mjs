/**
 * 
 */

import { Text } from "troika-three-text";

class TitleText extends Text {
    constructor(text) {
        super();
        this.text = text;
        this.fontSize = 0.2;
        this.color = 0x9966ff;
        this.font = import.meta.url.replace("/index.mjs", "/CascadiaMono.ttf");
        this.sync();
    }
}

export default Object.assign(TitleText, {
    "__tests__": {
        "can be tested": () => {
            expect(true).toEqual(true);
        }
    }
});
