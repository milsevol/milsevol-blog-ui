const getInfoLabelList = 
	{
		"menus" : [
			  {
				"id": "/func1",  
				"level": "1",   
				"title": "功能1",   
				"children":[]        
			  },
			  {
				"id": "/func2",
				"level": "1",   
				"title": "功能2",
				"children":[]
			  },
			  {
				"id": "/func3",
				"level": "1",   
				"title": "功能3",
				"children": [
				  {
					"id": "/func31",
					"level": "2",   
					"title": "功能3-1",
					"children":[]
				  },
				  {
					"id": "/func32",
					"level": "2", 
					"title": "功能3-2",
					"children":[]
				  },
				  {
					"id": "/func33",
					"level": "2", 
					"title": "功能3-3",
					"children":[{
						"id": "/func312",
						"level": "3", 
						"title": "功能3-5",
						"children":[]
					  }]
				  }
				]
			  }
		]
	}

const getInfoLabel = {
	"id": "/func1",  
	"level": "1",   
	"title": "功能1",
	"labelImageUrl":"https://www.yangqq.com/d/file/news/s/2020-03-29/8a11887bbac4c6bc07b32ebcfa77b2cc.png", 
	"children":[]        
}

const label = {
	getInfoLabelList:getInfoLabelList,
	getInfoLabel:getInfoLabel
};

export default label
