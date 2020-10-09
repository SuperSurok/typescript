"use strict";
// enum - вспомогательная сущность,
// которая позволяет лучше структурировать код
var MemberShip;
(function (MemberShip) {
    MemberShip[MemberShip["Simple"] = 0] = "Simple";
    MemberShip[MemberShip["Standard"] = 1] = "Standard";
    MemberShip[MemberShip["Premium"] = 2] = "Premium";
})(MemberShip || (MemberShip = {}));
const memberShip = MemberShip.Standard; // получить индекс enum =>
const memberShipReverse = MemberShip[2]; // получить строковое представление => Premium
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FASEBOOK"] = "FASEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
const social = SocialMedia.FASEBOOK;
