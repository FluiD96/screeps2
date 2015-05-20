for(var i in Game.creeps) 
{
        if((Game.creeps[i].memory.role == 'worker') && (Game.creeps[i].ticksToLive<2))
        {
            console.log('kek');
            for(var e in Memory.spawns)
            {
                Memory.spawns[Game.creeps[i].memory.spawned].worker--;
                if(Game.creeps[i].memory.src!=undefined)
                {
                    Memory[Game.creeps[i].memory.src].workers=Memory[Game.creeps[i].memory.src].workers-1;
                    break;
                }
            }
            delete Memory.creeps[i];
        }
        if((Game.creeps[i].memory.role == 'builder') && (Game.creeps[i].ticksToLive<2))
        {
            for(var e in Memory.spawns)
            {
                Memory.spawns[Game.creeps[i].memory.spawned].builder--;
                break;
            }
            delete Memory.creeps[i];
        }
}
