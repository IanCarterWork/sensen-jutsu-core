import { SensenFxEngine } from ".";
export class FxPresenter {
    async entry(widget) {
        return new Promise((done, fail) => {
            try {
                const fx = new SensenFxEngine({
                    from: [0], to: [100],
                    duration: 360,
                    hit: (interpolarity) => {
                        if (widget) {
                            widget.style.opacity = `${interpolarity[0] / 100}`;
                        }
                    },
                    done: () => done(widget)
                });
                fx.Start();
            }
            catch (e) {
                fail(e);
            }
        });
    }
    async entryReverse(widget) {
        return new Promise((done, fail) => {
            try {
                const fx = new SensenFxEngine({
                    from: [0], to: [100],
                    duration: 200,
                    hit: (interpolarity) => {
                        if (widget) {
                            widget.style.opacity = `${interpolarity[0] / 10}`;
                        }
                    },
                    done: () => done(widget)
                });
                fx.Start();
            }
            catch (e) {
                fail(e);
            }
        });
    }
    async exit(widget) {
        return new Promise((done, fail) => {
            try {
                const fx = new SensenFxEngine({
                    from: [100], to: [0],
                    duration: 200,
                    hit: (interpolarity) => {
                        if (widget) {
                            widget.style.opacity = `${interpolarity[0] / 10}`;
                        }
                    },
                    done: () => done(widget)
                });
                fx.Start();
            }
            catch (e) {
                fail(e);
            }
        });
    }
    async exitReverse(widget) {
        return new Promise((done, fail) => {
            try {
                const fx = new SensenFxEngine({
                    from: [100], to: [0],
                    duration: 200,
                    hit: (interpolarity) => {
                        if (widget) {
                            widget.style.opacity = `${interpolarity[0] / 10}`;
                        }
                    },
                    done: () => done(widget)
                });
                fx.Start();
            }
            catch (e) {
                fail(e);
            }
        });
    }
}
export class FxSlideHorizontal extends FxPresenter {
    async entry(widget) {
        return new Promise((done, fail) => {
            try {
                const fx = new SensenFxEngine({
                    from: [110], to: [0],
                    duration: 256,
                    hit: (interpolarity) => {
                        if (widget) {
                            widget.style.transform = `translateX(${interpolarity[0]}%)`;
                        }
                    },
                    done: () => done(widget)
                });
                fx.Start();
            }
            catch (e) {
                fail(e);
            }
        });
    }
    async entryReverse(widget) {
        return new Promise((done, fail) => {
            try {
                const fx = new SensenFxEngine({
                    from: [-110], to: [0],
                    duration: 256,
                    hit: (interpolarity) => {
                        if (widget) {
                            widget.style.transform = `translateX(${interpolarity[0]}%)`;
                        }
                    },
                    done: () => done(widget)
                });
                fx.Start();
            }
            catch (e) {
                fail(e);
            }
        });
    }
    async exit(widget) {
        return new Promise((done, fail) => {
            try {
                const fx = new SensenFxEngine({
                    from: [0], to: [110],
                    duration: 400,
                    hit: (interpolarity) => {
                        if (widget) {
                            widget.style.transform = `translateX(${interpolarity[0]}%)`;
                        }
                    },
                    done: () => done(widget)
                });
                fx.Start();
            }
            catch (e) {
                fail(e);
            }
        });
    }
    async exitReverse(widget) {
        return new Promise((done, fail) => {
            try {
                const fx = new SensenFxEngine({
                    from: [0], to: [-110],
                    duration: 400,
                    hit: (interpolarity) => {
                        if (widget) {
                            widget.style.transform = `translateX(${interpolarity[0]}%)`;
                        }
                    },
                    done: () => done(widget)
                });
                fx.Start();
            }
            catch (e) {
                fail(e);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlc2V0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJlc2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBc0IsY0FBYyxFQUFFLE1BQU0sR0FBRyxDQUFDO0FBTXZELE1BQU0sT0FBTyxXQUFXO0lBRXBCLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBb0I7UUFFNUIsT0FBTyxJQUFJLE9BQU8sQ0FBMEIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFFdkQsSUFBRztnQkFFQyxNQUFNLEVBQUUsR0FBRyxJQUFJLGNBQWMsQ0FBQztvQkFFMUIsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFDLENBQUMsR0FBRyxDQUFDO29CQUVsQixRQUFRLEVBQUUsR0FBRztvQkFFYixHQUFHLEVBQUUsQ0FBQyxhQUF1QixFQUFDLEVBQUU7d0JBRTVCLElBQUcsTUFBTSxFQUFDOzRCQUVOLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUksYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFBO3lCQUV0RDtvQkFHTCxDQUFDO29CQUVELElBQUksRUFBRSxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUV6QixDQUFDLENBQUE7Z0JBRUYsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBRWQ7WUFFRCxPQUFNLENBQUMsRUFBQztnQkFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBRTtRQUV4QixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7SUFJRCxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQW9CO1FBRW5DLE9BQU8sSUFBSSxPQUFPLENBQTBCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBRXZELElBQUc7Z0JBRUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxjQUFjLENBQUM7b0JBRTFCLElBQUksRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVB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O3lCQUUvRDtvQkFHTCxDQUFDO29CQUVELElBQUksRUFBRSxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsTUFBTSxDQUFDO2lCQUV6QixDQUFDLENBQUE7Z0JBRUYsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO2FBRWQ7WUFFRCxPQUFNLENBQUMsRUFBQztnQkFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFBRTtRQUV4QixDQUFDLENBQUMsQ0FBQTtJQUVOLENBQUM7Q0FHSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNlbnNlbkZ4VHJhbnNpdGlvbiwgU2Vuc2VuRnhFbmdpbmUgfSBmcm9tIFwiLlwiO1xuXG5cblxuXG5cbmV4cG9ydCBjbGFzcyBGeFByZXNlbnRlciBpbXBsZW1lbnRzIFNlbnNlbkZ4VHJhbnNpdGlvbntcblxuICAgIGFzeW5jIGVudHJ5KHdpZGdldD86IEhUTUxFbGVtZW50KXtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ+KChkb25lLCBmYWlsKSA9PntcblxuICAgICAgICAgICAgdHJ5e1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZnggPSBuZXcgU2Vuc2VuRnhFbmdpbmUoe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZnJvbTpbMF0sIHRvOlsxMDBdLFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDM2MCxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGhpdDogKGludGVycG9sYXJpdHk6IG51bWJlcltdKT0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aWRnZXQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5zdHlsZS5vcGFjaXR5ID0gYCR7IGludGVycG9sYXJpdHlbMF0gLyAxMDB9YFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRvbmU6ICgpPT5kb25lKHdpZGdldClcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgZnguU3RhcnQoKTtcbiAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2F0Y2goZSl7IGZhaWwoZSk7IH1cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cblxuICAgIGFzeW5jIGVudHJ5UmV2ZXJzZSh3aWRnZXQ/OiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkPigoZG9uZSwgZmFpbCkgPT57XG5cbiAgICAgICAgICAgIHRyeXtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZ4ID0gbmV3IFNlbnNlbkZ4RW5naW5lKHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZyb206WzBdLCB0bzpbMTAwXSxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBoaXQ6IChpbnRlcnBvbGFyaXR5OiBudW1iZXJbXSk9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2lkZ2V0KXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5zdHlsZS5vcGFjaXR5ID0gYCR7IGludGVycG9sYXJpdHlbMF0gLyAxMH1gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBkb25lOiAoKT0+ZG9uZSh3aWRnZXQpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICBcblxuICAgICAgICAgICAgICAgIGZ4LlN0YXJ0KCk7XG4gICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhdGNoKGUpeyBmYWlsKGUpOyB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxuXG5cbiAgICBhc3luYyBleGl0KHdpZGdldD86IEhUTUxFbGVtZW50KXtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ+KChkb25lLCBmYWlsKSA9PntcblxuICAgICAgICAgICAgdHJ5e1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZnggPSBuZXcgU2Vuc2VuRnhFbmdpbmUoe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZnJvbTpbMTAwXSwgdG86WzBdLFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGhpdDogKGludGVycG9sYXJpdHk6IG51bWJlcltdKT0+e1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih3aWRnZXQpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0LnN0eWxlLm9wYWNpdHkgPSBgJHsgaW50ZXJwb2xhcml0eVswXSAvIDEwfWBcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkb25lOiAoKT0+ZG9uZSh3aWRnZXQpXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIGZ4LlN0YXJ0KCk7XG4gICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhdGNoKGUpeyBmYWlsKGUpOyB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxuXG5cbiAgICBhc3luYyBleGl0UmV2ZXJzZSh3aWRnZXQ/OiBIVE1MRWxlbWVudCl7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkPigoZG9uZSwgZmFpbCkgPT57XG5cbiAgICAgICAgICAgIHRyeXtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZ4ID0gbmV3IFNlbnNlbkZ4RW5naW5lKHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZyb206WzEwMF0sIHRvOlswXSxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBoaXQ6IChpbnRlcnBvbGFyaXR5OiBudW1iZXJbXSk9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2lkZ2V0KXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5zdHlsZS5vcGFjaXR5ID0gYCR7IGludGVycG9sYXJpdHlbMF0gLyAxMH1gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogKCk9PmRvbmUod2lkZ2V0KVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICBmeC5TdGFydCgpO1xuICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXRjaChlKXsgZmFpbChlKTsgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBcbn1cblxuXG5cblxuXG5cbmV4cG9ydCBjbGFzcyBGeFNsaWRlSG9yaXpvbnRhbCBleHRlbmRzIEZ4UHJlc2VudGVye1xuXG4gICAgYXN5bmMgZW50cnkod2lkZ2V0PzogSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxIVE1MRWxlbWVudCB8IHVuZGVmaW5lZD4oKGRvbmUsIGZhaWwpID0+e1xuXG4gICAgICAgICAgICB0cnl7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmeCA9IG5ldyBTZW5zZW5GeEVuZ2luZSh7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmcm9tOlsxMTBdLCB0bzpbMF0sXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjU2LFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaGl0OiAoaW50ZXJwb2xhcml0eTogbnVtYmVyW10pPT57XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2lkZ2V0KXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyBpbnRlcnBvbGFyaXR5WzBdfSUpYFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZG9uZTogKCk9PmRvbmUod2lkZ2V0KVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICBmeC5TdGFydCgpO1xuICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXRjaChlKXsgZmFpbChlKTsgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuXG4gICAgYXN5bmMgZW50cnlSZXZlcnNlKHdpZGdldD86IEhUTUxFbGVtZW50KXtcblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SFRNTEVsZW1lbnQgfCB1bmRlZmluZWQ+KChkb25lLCBmYWlsKSA9PntcblxuICAgICAgICAgICAgdHJ5e1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZnggPSBuZXcgU2Vuc2VuRnhFbmdpbmUoe1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZnJvbTpbLTExMF0sIHRvOlswXSxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyNTYsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBoaXQ6IChpbnRlcnBvbGFyaXR5OiBudW1iZXJbXSk9PntcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYod2lkZ2V0KXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldC5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgkeyBpbnRlcnBvbGFyaXR5WzBdfSUpYFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgZG9uZTogKCk9PmRvbmUod2lkZ2V0KVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgXG5cbiAgICAgICAgICAgICAgICBmeC5TdGFydCgpO1xuICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjYXRjaChlKXsgZmFpbChlKTsgfVxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIGFzeW5jIGV4aXQod2lkZ2V0PzogSFRNTEVsZW1lbnQpe1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxIVE1MRWxlbWVudCB8IHVuZGVmaW5lZD4oKGRvbmUsIGZhaWwpID0+e1xuXG4gICAgICAgICAgICB0cnl7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBmeCA9IG5ldyBTZW5zZW5GeEVuZ2luZSh7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBmcm9tOlswXSwgdG86WzExMF0sXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaGl0OiAoaW50ZXJwb2xhcml0eTogbnVtYmVyW10pPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpZGdldCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsgaW50ZXJwb2xhcml0eVswXX0lKWBcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkb25lOiAoKT0+ZG9uZSh3aWRnZXQpXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIGZ4LlN0YXJ0KCk7XG4gICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhdGNoKGUpeyBmYWlsKGUpOyB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgYXN5bmMgZXhpdFJldmVyc2Uod2lkZ2V0PzogSFRNTEVsZW1lbnQpOiBQcm9taXNlPEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkPiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEhUTUxFbGVtZW50IHwgdW5kZWZpbmVkPigoZG9uZSwgZmFpbCkgPT57XG5cbiAgICAgICAgICAgIHRyeXtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGZ4ID0gbmV3IFNlbnNlbkZ4RW5naW5lKHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZyb206WzBdLCB0bzpbLTExMF0sXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaGl0OiAoaW50ZXJwb2xhcml0eTogbnVtYmVyW10pPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHdpZGdldCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHsgaW50ZXJwb2xhcml0eVswXX0lKWBcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBkb25lOiAoKT0+ZG9uZSh3aWRnZXQpXG5cbiAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIGZ4LlN0YXJ0KCk7XG4gICAgXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhdGNoKGUpeyBmYWlsKGUpOyB9XG5cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIFxufVxuXG4iXX0=