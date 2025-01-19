print('Start MongoDB initialization...');

db = db.getSiblingDB('productdb');
print('Created/Switched to database productdb');

// First check if the user already exists
var users = db.getUsers();
print('Current users in database:', users);

// Create the user
try {
    db.createUser({
        user: "productUser",
        pwd: "productPassword",
        roles: [
            {
                role: "readWrite",
                db: "productdb"
            }
        ]
    });
    print('User productUser created successfully');
} catch (error) {
    print('Error creating user:', error);
}

// Verify the user was created
users = db.getUsers();
print('Users after creation:', users);

// Test authentication
try {
    db.auth("productUser", "productPassword");
    print('Authentication test successful');
} catch (error) {
    print('Authentication test failed:', error);
}