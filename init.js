if((!Memory.init) && (Memory.start))
{
    for(var name in Game.spawns)
    {
        Game.spawns[name].memory.worker = 0;
        Game.spawns[name].memory.healer = 0;
        Game.spawns[name].memory.guard = 0;
        Game.spawns[name].memory.ranger = 0;
        Game.spawns[name].memory.builder = 0;
    }
    for(var name in Game.spawns)
{
    var source1 = Game.spawns[name].room.find(FIND_SOURCES)
    for(var i in source1)
    {
       Memory[source1[i].id] = {};
       Memory[source1[i].id].workers = 0;
    }
}
    Memory.init = true;
    Memory.exttim = 800;
}
