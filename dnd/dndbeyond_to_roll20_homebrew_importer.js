
// AC stuff
$monster_ac_string = $("div.monster-details").find("span.mon-stat-block__attribute-label:contains('Armor Class') + .mon-stat-block__attribute-value").text();
ac_and_armor_extraction_re = /(?<ac>\d+)\s+\((?<armor>.*?)\)/;
ac_and_armor_extracted = ac_and_armor_extraction_re.exec($monster_ac_string);

// HP stuff
$monster_hp_string = $("div.monster-details").find("span.mon-stat-block__attribute-label:contains('Hit Points') + .mon-stat-block__attribute-data").text();
hp_and_form_extraction_re = /(?<hp>\d+)\s+\((?<form>.*?)\)/;
hp_and_form_extracted = hp_and_form_extraction_re.exec($monster_hp_string);

// Skill stuff
$monster_skills_string = $("div.monster-details").find("span.mon-stat-block__tidbit-label:contains('Skills') + .mon-stat-block__tidbit-data").text().trim();
skills_extraction_re = /(?<skill>\w+) \+(?<mod>\d+)/g
skills = [];
skill = undefined;
do {
	skill = skills_extraction_re.exec($monster_skills_string)
	if (skill) {
		skills.push(skill);
	}
} while (skill);

// Stat stuff
function get_stat(s) {
	return $("div.ability-block__heading:contains('"+s.toUpperCase()+"') + .ability-block__data .ability-block__score").text()
}

$monster_info = {
	"name" : $("div.monster-details").find("a.mon-stat-block__name-link").text().trim(),
	"ac" : ac_and_armor_extracted["groups"]["ac"],
	"armor" : ac_and_armor_extracted["groups"]["armor"],
	"hp" : hp_and_form_extracted["groups"]["hp"],
	"hp_form" : hp_and_form_extracted["groups"]["form"],

    "stat_str" : get_stat("STR"),
    "stat_str" : get_stat("DEX"),
    "stat_str" : get_stat("CON"),
    "stat_str" : get_stat("INT"),
    "stat_str" : get_stat("WIS"),
    "stat_str" : get_stat("CHA"),

	"skills": skills,

};

// Doesn't actually work yet. Just WIP.
