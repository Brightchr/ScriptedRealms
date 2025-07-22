
package com.scriptedrealms.backend.model;

import java.util.List;

public class Character {
    Long id;
    String name;
    int level;
    String characterClass;
    int maxHp;
    int currentHp;
    CharacterSheet sheet;
    List<Item> inventory;
    List<Spell> spells;
    List<Condition> conditions;
    int gold;
    int xp;

    private Character(long id,
                      String name,
                      int level,
                      String characterClass,
                      int maxHp,
                      int currentHp,
                      CharacterSheet sheet,
                      List<Item> inventory,
                      List<Spell> spells,
                      List<Condition> conditions,
                      int gold,
                      int xp)
    {
        this.id = id;
        this.name = name;
        this.level = level;
        this.characterClass = characterClass;
        this.maxHp = maxHp;
        this.currentHp = currentHp;
        this.sheet = sheet;
        this.inventory = inventory;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getCharacterClass() {
        return characterClass;
    }

    public void setCharacterClass(String characterClass) {
        this.characterClass = characterClass;
    }

    public int getMaxHp() {
        return maxHp;
    }

    public void setMaxHp(int maxHp) {
        this.maxHp = maxHp;
    }

    public int getCurrentHp() {
        return currentHp;
    }

    public void setCurrentHp(int currentHp) {
        this.currentHp = currentHp;
    }

    public CharacterSheet getSheet() {
        return sheet;
    }

    public void setSheet(CharacterSheet sheet) {
        this.sheet = sheet;
    }

    public List<Item> getInventory() {
        return inventory;
    }

    public void setInventory(List<Item> inventory) {
        this.inventory = inventory;
    }

    public List<Spell> getSpells() {
        return spells;
    }

    public void setSpells(List<Spell> spells) {
        this.spells = spells;
    }

    public List<Condition> getConditions() {
        return conditions;
    }

    public void setConditions(List<Condition> conditions) {
        this.conditions = conditions;
    }

    public int getGold() {
        return gold;
    }

    public void setGold(int gold) {
        this.gold = gold;
    }

    public int getXp() {
        return xp;
    }

    public void setXp(int xp) {
        this.xp = xp;
    }
}
