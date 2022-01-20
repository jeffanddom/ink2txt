import * as fs from 'fs'

function collect(obj: any): string[] {
  if (typeof obj === 'string') {
    if (obj.startsWith("^") && obj.match(/[a-zA-Z0-9]/) !== null) {
      return [obj.substring(1)]
    }

    return []
  }
  
  if (Array.isArray(obj)) {
    var res: string[] = []
    for (const sub of obj) {
      res = res.concat(collect(sub))
    }
    return res
  }

  if (obj !== null && typeof obj === 'object') {
    var res: string[] = []
    for (var k in obj) {
      res = res.concat(collect(obj[k]))
    }
    return res
  }

  return []
}

function main(): void {
  const json = fs.readFileSync(process.argv[2]).toString().trim()
  const story = JSON.parse(json)
  const txt = collect(story).join("\n\n")
  console.log(txt)
}

main()