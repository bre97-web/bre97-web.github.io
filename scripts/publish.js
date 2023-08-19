import fs from 'fs'
import config from '../publish.config.js'

export const convert = (target = 'npm') => {
    console.log('Start building: publish')
    
    const content = fs.readFileSync('package.json', {
        encoding: 'utf-8'
    })

    let contentJSON = JSON.parse(content)
    contentJSON.name = config[target]
    console.log(`convert name to: ${contentJSON.name}`);
    
    fs.writeFileSync('package.json', JSON.stringify(contentJSON), {
        encoding: 'utf-8',
    })
    
    console.log('End building: publish-to-npm')
}
