import fs from "fs"
import csvParse from "csv-parse"
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository"
import { inject, injectable } from "tsyringe"

interface IImportCaregory{
    name: string,
    description: string
}
@injectable()
class ImportCategoryUseCase{
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository){}

    loadCategories(file: any): Promise<IImportCaregory[]>{
        return new Promise((resolve, reject)=>{
            const stream = fs.createReadStream(file.path)
            const categories: IImportCaregory[]= []
            const parseFile = csvParse()
            stream.pipe(parseFile)
    
           parseFile.on("data", async(line)=>{
                const[name, description] = line
                categories.push({
                    name,
                    description
                })
            })
            .on("end",()=>{
                fs.promises.unlink(file.path)
                resolve(categories)
            })
            .on("error",(err)=>{
                reject(err)
            })
        }) 
    }
    
    async execute(file: any): Promise<void>{
        const categories = await this.loadCategories(file)
        categories.map(async (category)=>{
            const { name, description } = category
            const existCategory = this.categoriesRepository.findByName(name)

            if(!existCategory){
                this.categoriesRepository.create({
                    name,
                    description
                })
            }
        })
    }
}

export { ImportCategoryUseCase }