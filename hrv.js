for(var name in Game.creeps) 
{
	var creep = Game.creeps[name];
	if (creep.memory.role == 'worker')
	{
	    for(var name in Game.spawns)
            {
            var source1 = Game.spawns[name].room.find(FIND_SOURCES)
            for(var i in source1)
            {
                if(Memory[source1[i].id] == undefined)
                {
                    Memory[source1[i].id] = {};
                    if(Memory[source1[i].id].workers == undefined)
                    {
                        Memory[source1[i].id].workers = 0;
                    }
                }
                if((creep.energy < creep.energyCapacity)&&(creep.memory.src == undefined))
                {
                    if(Memory[source1[i].id].workers<2)
                    {
                        Memory[source1[i].id].workers=Memory[source1[i].id].workers+1;
                        creep.memory.src = source1[i].id;
                    }
                }
                var mained = 0;
                if((creep.energy >= creep.energyCapacity)&&(Game.spawns[creep.memory.spawned].energy < 6000))
                {
                    creep.moveTo(Game.spawns[creep.memory.spawned]);
                    creep.transferEnergy(Game.spawns[creep.memory.spawned]);
                    mained = 1;
                }
                if((creep.energy >= creep.energyCapacity)&&(Game.spawns[name].energy < 6000)&&(mained == 0))
                {
                    creep.moveTo(Game.spawns[name]);
                    creep.transferEnergy(Game.spawns[name]);
                }
                if((creep.energy<creep.energyCapacity)&&(creep.memory.src != undefined))
                {
                    creep.moveTo(Game.getObjectById(creep.memory.src));
                    creep.harvest(Game.getObjectById(creep.memory.src));
                }
            }
        }
        mained = 0;
	}
}
