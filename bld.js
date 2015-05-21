var getSize = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
for(var name in Game.creeps) 
{
	var creep = Game.creeps[name];
	var fcs = creep.room.find(FIND_CONSTRUCTION_SITES);
	for(var e in fcs)
	{
        var la = creep.room.lookAt(fcs[e].pos.x,fcs[e].pos.y)
        for(var u in la)
        {
            if(la[u].type == 'structure')
            {
                fcs[e].remove();
            }
        }
	}
	if (creep.memory.role == 'builder')
	{
	    for(var name in Game.spawns)
	    {
	    var controller = Game.spawns[name].room.find(FIND_STRUCTURES);
	                    for(var st in controller)
	                    {
	                        if(controller[st].structureType == 'controller')
	                        {
	                            if((controller[st]) && (controller[st].owner == undefined)) 
	                        {
                            creep.moveTo(controller[st]);
                            creep.claimController(controller[st]);
                            break;
	                        }
	                        if((creep.energy >0)&&(controller[st].owner != undefined)&&(controller[st].owner.username == 'Player 1'))
	                        {
	                        creep.moveTo(controller[st]);
	                        creep.upgradeController(controller[st]);
	                        var path = creep.room.findPath(Game.spawns[name].pos, controller[st].pos,{ignoreCreeps: true});
	            for(var e in path)
	            {
	                var found = creep.room.lookAt(path[e].x, path[e].y);
	                for(var t in found)
	                {
	                    
	                if((found[0].type != 'constructionSite') && (found[0].type != 'structure')&&(found[0].type == 'terrain'))
	                {
	                    creep.room.createConstructionSite(path[e].x, path[e].y, STRUCTURE_ROAD);
	                    break;
	                }
	                
	            }
	  	    }
	                        break;
	                        }
	                        }
	               }
	               
	               
	    }
	    var cs = creep.pos.findClosest(FIND_CONSTRUCTION_SITES)
	    if((creep.energy > 0)&&(cs != null))
	    {
	        creep.moveTo(cs);
	        creep.build(cs);

	    }
	    if(creep.energy <= 5)
	    {
	        creep.moveTo(creep.pos.findClosest(FIND_MY_SPAWNS));
	        creep.pos.findClosest(FIND_MY_SPAWNS).transferEnergy(creep);
	    }
	    var src = creep.room.find(FIND_SOURCES);
	    if(creep.room.find(FIND_SOURCES).length > 0)
	    {
	        
	        for(var i in src)
	        {
	            for(var k in Game.spawns)
	            {
	            var path = creep.room.findPath(Game.spawns[k].pos, src[i].pos,{ignoreCreeps: true});
	            for(var e in path)
	            {
	                var found = creep.room.lookAt(path[e].x, path[e].y);
	                for(var t in found)
	                {
	                    
	                if((found[0].type != 'constructionSite') && (found[0].type != 'structure')&&(found[0].type == 'terrain'))
	                {
	                    creep.room.createConstructionSite(path[e].x, path[e].y, STRUCTURE_ROAD);
	                    break;
	                }
	                
	            }
	  	    }
	    }
	    
    }
}



var src = creep.room.find(FIND_MY_STRUCTURES);
	    if(creep.room.find(FIND_MY_STRUCTURES).length > 0)
	    {
	        
	        for(var i in src)
	        {
	            for(var k in Game.spawns)
	            {
	            var path = creep.room.findPath(Game.spawns[k].pos, src[i].pos,{ignoreCreeps: true});
	            for(var e in path)
	            {
	                var found = creep.room.lookAt(path[e].x, path[e].y);
	                for(var t in found)
	                {
	                    
	                if((found[0].type != 'constructionSite') && (found[0].type != 'structure')&&(found[0].type == 'terrain'))
	                {
	                    creep.room.createConstructionSite(path[e].x, path[e].y, STRUCTURE_ROAD);
	                    break;
	                }
	                
	            }
	  	    }
	    }
	    
    }
}




	
	    
	}
	for(var name in Game.spawns)
	    {
	        if(Game.spawns[name].memory.extensions == undefined)
	        {
	            Game.spawns[name].memory.extensions={};
	        }
	        
	        var spwn = Game.spawns[name];
	        if(spwn.energy > 5700)
	        {
	            var canbe = 0;
	            
	            for(var b in spwn.memory.extensions)
	            {
	                if(creep.room.lookAt(spwn.memory.extensions[b].posit)[0].type == 'structure')
	                {
	                   if(creep.room.lookAt(spwn.memory.extensions[b].posit)[0].structure.energy >198)
	                   {
	                       canbe++
	                       console.log(canbe);
	                   }
	                }
	            }
	            var look = spwn.room.lookAtArea(spwn.pos.y-4, spwn.pos.x-4, spwn.pos.y+4, spwn.pos.x+4);
	            for(var i in look)
	            {
	                for(var k in look[i])
	                {
	                    for(var w in look[i][k])
	                    {
	                        
	                        if (((look[i][k][w].type == 'terrain')&&(Memory.exttim < 10)&&(getSize(spwn.memory.extensions)<3))||((canbe == getSize(spwn.memory.extensions))&&(getSize(spwn.memory.extensions)<3)))
	                    {
	                    var kx = parseInt(k);
	                    var ky = parseInt(i);
	                    console.log(creep.room.createConstructionSite(kx, ky, STRUCTURE_EXTENSION))
	                    creep.room.createConstructionSite(kx, ky, STRUCTURE_EXTENSION)
	                    
                        
                        if(creep.room.createConstructionSite(kx, ky, STRUCTURE_EXTENSION) == 0)
                        {
                        var sz = getSize(spwn.memory.extensions);
                        spwn.memory.extensions[sz]={};
                        spwn.memory.extensions[sz].posit = {x: kx, y: ky};
                        Memory.exttim = 1300;
	                    break;
                        }
	                    }
	                    }
	                }
	            }
	        }
	    }
}
