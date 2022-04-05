export default function getHeroInfo(objHero) {
  if (objHero.health > 50) {
    return 'healthy';
  } if (objHero.health >= 15 && objHero.health <= 50) {
    return 'wounded';
  }
  return 'critical';
}
