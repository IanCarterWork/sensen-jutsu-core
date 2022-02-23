

function SensenURLScheme(base: string = '/'){

    return {

        '@Components' : `${ base || '/' }sensen/components`,
        
        '@Activities' : `${ base || '/' }sensen/activities`,
        
        '@Palette' : `${ base || '/' }sensen/palette`,
        
        '@Tone' : `${ base || '/' }sensen/tone`,
        
        '@Themes' : `${ base || '/' }sensen/themes`,
        
        '@Plugins' : `${ base || '/' }sensen/plugins`,

        '@Assets' : `${ base || '/' }assets`,

        '@CSSAssets' : `${ base || '/' }assets/css`,

        '@JSAssets' : `${ base || '/' }assets/js`,

        '@FontsAssets' : `${ base || '/' }assets/fonts`,

        '@ImagesAssets' : `${ base || '/' }assets/images`,

        '@App' : `${ base || '/' }`,
        
    }
    
} 


export default SensenURLScheme