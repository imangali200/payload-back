import { CollectionConfig } from "payload";

export const ourServices:CollectionConfig = {
    slug:'ourServices',
    access:{
        read:()=>true,
        create:()=>true,
        update:()=>true,
        delete:()=>true,
    },
    fields:[
        {
            name:'title',
            type:'text',
            required:true
        },
        {
            name:'services',
            type:'array',
            fields:[
                {
                    name:'title',
                    type:'text'
                },
                {
                    name:'description',
                    type:'text'
                }

            ]
        }
    ]
}