const navigationmap =[
    {   
        "name":"Home",
        "color":"",
        "path":"/",
        "children":[]
    },
    {
        "name":"About Us",
        "color":"",
        "path":"/aboutus",
        "children":[]
    },
    {

        "name":"Contact Us",
        "color":"",
        "path":"/contactus",
        "children":[]
    },
    /*{
        "name":"Products",
        "color":"",
        "path":"/products",
        "children":[]
    },*/
    {
        "name":"Divisions",
        "color":"",
        "path":"/",
        "children":[
            {
                "name":"Division1",
                "color":"",
                "path":"/",
                "children":[
                {
                    "name":"division 1 a",
                    "color":"",
                    "path":"/",
                    "children":[]
                },
                {
                    "name":"division 1 b",
                    "color":"",
                    "path":"/",
                    "children":[]
                }
            ]
            },
            {
                "name":"Division2",
                "color":"",
                "path":"/",
                "children":[{
                    "name":"division 2 a",
                    "color":"",
                    "path":"/",
                    "children":[]
                },
                {
                    "name":"division 2 b",
                    "color":"",
                    "path":"/",
                    "children":[]
                }]
            },
            {
                "name":"Division3",
                "color":"",
                "path":"/",
                "children":[]
            },
            {
                "name":"Division4",
                "color":"",
                "path":"/",
                "children":[]
            },
            {
                "name":"Division5",
                "color":"",
                "path":"/",
                "children":[]
            },
            {
                "name":"Division6",
                "color":"",
                "path":"/",
                "children":[]
            },
            
        ]
    }
]



module.exports={
    navigationmap:navigationmap,
}