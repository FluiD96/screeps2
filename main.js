require('init');
if(Memory.init)
{
    require('creepmngr');
    require('hrv');
    require('bld');
    require('deathcheck');
    if(Memory.exttim != 0)
    {
    Memory.exttim--;
    }
}
