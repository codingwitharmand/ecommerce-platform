db = db.getSiblingDB('productdb')

db.createUser({
    user: 'productUser',
    pwd: 'productPassword',
    roles: [
        {
            role: 'readWrite',
            db: 'productdb'
        }
    ]
});