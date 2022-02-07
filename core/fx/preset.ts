import { SensenFxTransition, SensenFxEngine } from ".";





export class FxPresenter implements SensenFxTransition{

    async entry(widget?: HTMLElement){

        return new Promise<HTMLElement | undefined>((done, fail) =>{

            try{

                const fx = new SensenFxEngine({
                    
                    from:[0], to:[100],
                    
                    duration: 360,
                    
                    hit: (interpolarity: number[])=>{

                        if(widget){
                            
                            widget.style.opacity = `${ interpolarity[0] / 100}`

                        }
                    
                    
                    },
                    
                    done: ()=>done(widget)

                })
    
                fx.Start();
    
            }

            catch(e){ fail(e); }

        })

    }



    async entryReverse(widget?: HTMLElement){

        return new Promise<HTMLElement | undefined>((done, fail) =>{

            try{

                const fx = new SensenFxEngine({
                    
                    from:[0], to:[100],
                    
                    duration: 200,
                    
                    hit: (interpolarity: number[])=>{

                        if(widget){

                            widget.style.opacity = `${ interpolarity[0] / 10}`

                        }
                    

                    },

                    done: ()=>done(widget)
                    
                })

    

                fx.Start();
    
            }

            catch(e){ fail(e); }

        })

    }



    async exit(widget?: HTMLElement){

        return new Promise<HTMLElement | undefined>((done, fail) =>{

            try{

                const fx = new SensenFxEngine({
                    
                    from:[100], to:[0],
                    
                    duration: 200,
                    
                    hit: (interpolarity: number[])=>{

                        if(widget){

                            widget.style.opacity = `${ interpolarity[0] / 10}`

                        }
                    
                    
                    },
                    
                    done: ()=>done(widget)

                })
    
                fx.Start();
    
            }

            catch(e){ fail(e); }

        })

    }



    async exitReverse(widget?: HTMLElement){

        return new Promise<HTMLElement | undefined>((done, fail) =>{

            try{

                const fx = new SensenFxEngine({
                    
                    from:[100], to:[0],
                    
                    duration: 200,
                    
                    hit: (interpolarity: number[])=>{

                        if(widget){

                            widget.style.opacity = `${ interpolarity[0] / 10}`

                        }
                    
                    
                    },
                    
                    done: ()=>done(widget)

                })
    
                fx.Start();
    
            }

            catch(e){ fail(e); }

        })

    }

    
}






export class FxSlideHorizontal extends FxPresenter{

    async entry(widget?: HTMLElement){

        return new Promise<HTMLElement | undefined>((done, fail) =>{

            try{

                const fx = new SensenFxEngine({
                    
                    from:[110], to:[0],
                    
                    duration: 256,
                    
                    hit: (interpolarity: number[])=>{
                    
                        if(widget){

                            widget.style.transform = `translateX(${ interpolarity[0]}%)`

                        }
                    
                    },
                    
                    done: ()=>done(widget)

                })
    
                fx.Start();
    
            }

            catch(e){ fail(e); }

        })

    }



    async entryReverse(widget?: HTMLElement){

        return new Promise<HTMLElement | undefined>((done, fail) =>{

            try{

                const fx = new SensenFxEngine({
                    
                    from:[-110], to:[0],
                    
                    duration: 256,
                    
                    hit: (interpolarity: number[])=>{

                        if(widget){

                            widget.style.transform = `translateX(${ interpolarity[0]}%)`

                        }
                    

                    },

                    done: ()=>done(widget)
                    
                })

    

                fx.Start();
    
            }

            catch(e){ fail(e); }

        })

    }


    async exit(widget?: HTMLElement){

        return new Promise<HTMLElement | undefined>((done, fail) =>{

            try{

                const fx = new SensenFxEngine({
                    
                    from:[0], to:[110],
                    
                    duration: 400,
                    
                    hit: (interpolarity: number[])=>{

                        if(widget){

                            widget.style.transform = `translateX(${ interpolarity[0]}%)`

                        }
                    
                    
                    },
                    
                    done: ()=>done(widget)

                })
    
                fx.Start();
    
            }

            catch(e){ fail(e); }

        })

    }


    async exitReverse(widget?: HTMLElement): Promise<HTMLElement | undefined> {

        return new Promise<HTMLElement | undefined>((done, fail) =>{

            try{

                const fx = new SensenFxEngine({
                    
                    from:[0], to:[-110],
                    
                    duration: 400,
                    
                    hit: (interpolarity: number[])=>{

                        if(widget){

                            widget.style.transform = `translateX(${ interpolarity[0]}%)`

                        }
                    
                    
                    },
                    
                    done: ()=>done(widget)

                })
    
                fx.Start();
    
            }

            catch(e){ fail(e); }

        })

    }

    
}

