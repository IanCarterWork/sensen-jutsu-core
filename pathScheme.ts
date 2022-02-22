

function SensenURLScheme(base: string = ''){

    return {

        '@Components' : `${ base }/sensen/components/`,
        
        '@Activities' : `${ base }/sensen/activities/`,
        
        '@Palette' : `${ base }/sensen/palette/`,
        
        '@Tone' : `${ base }/sensen/tone/`,
        
        '@Themes' : `${ base }/sensen/themes/`,
        
        '@Plugins' : `${ base }/sensen/plugins/`,

        '@Assets' : `${ base }/assets/`,

        '@CSSAssets' : `${ base }/sensen/assets/css/`,

        '@JSAssets' : `${ base }/sensen/assets/js/`,

        '@FontsAssets' : `${ base }/sensen/assets/fonts/`,

        '@ImagesAssets' : `${ base }/sensen/assets/images/`,

        '@App' : `${ base }/`,
        
    }
    
} 


export default SensenURLScheme