function skillMember() {
    var member = {
        name: "John",
        age: 25,
        skills: ["C++", "Java", "Python"],
        address: {
            city: "New York",
            state: "NY"
        },
        getSkills: function() {
            return this.skills;
        }
    };

    return member;
}