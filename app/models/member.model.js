module.exports = (sequelize, Sequelize) => {
    const Member = sequelize.define('members', {
        name: {
            type: Sequelize.STRING
        },
        phone: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    });

    return Member;
}