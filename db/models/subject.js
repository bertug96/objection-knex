const { Model } = require('objection');

class Subject extends Model {
    static get tableName() {
        return 'subject';
    };

    $beforeInsert() {
        this.createdAt = new Date();
    };

    $beforeUpdate() {
        this.updatedAt = new Date();
    };

    static get subjectColumn() {
        return 'subject';
    };

    static get personIdColumn() {
        return 'person_id';
    };

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['subject'],
            properties: {
                id: { type: 'integer' },
                subject: { type: 'string' },
                person_id: { type: 'integer' },
                createdAt: { type: 'string' },
                updatedAt: { type: 'string' }
            }
        };
    };
};

module.exports = Subject;