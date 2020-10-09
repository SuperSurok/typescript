// enum - вспомогательная сущность,
// которая позволяет лучше структурировать код

enum MemberShip {
  Simple,
  Standard,
  Premium,
}

const memberShip = MemberShip.Standard; // получить индекс enum =>
const memberShipReverse = MemberShip[2]; // получить строковое представление => Premium

enum SocialMedia {
  VK = 'VK',
  FASEBOOK = 'FASEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.FASEBOOK;