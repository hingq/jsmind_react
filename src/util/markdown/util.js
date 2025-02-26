import fs from 'node:fs'
import path from 'node:path'
export function scanMarkdownFiles(dir) {
        let file=[]

        fs.readdirSync(dir).forEach((filename) => {
            const fullpath=path.join(dir, filename)
            if (fs.statSync(fullpath).isDirectory()) {
                file = file.concat(scanMarkdownFiles(fullpath))
            }
            if (filename.endsWith(".md")) {
                file.push(filename)
            }
        })
        return file
}

export function generateRouter(file,baseUrl) {
   return file.map((filename) => {
       const relativePath = path.relative(baseUrl, filename)
        const routePath=`${relativePath.replace(/\.md$/,'')}`
        return {file,routePath}
    })
}