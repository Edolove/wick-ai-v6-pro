export function zoneFatigue(zone){
zone.tests++;
zone.force=Math.max(20,100-zone.tests*15);
return zone;
}
