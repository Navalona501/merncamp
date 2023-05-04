import bcrypt from 'bcrypt';

export const hashPassword = async (password) => {
    // const salt = await bcrypt.genSalt(3);
    // return await bcrypt.hash(password, salt);
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(3, (err, salt) => {
            if (err) reject(err);
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) reject(err);
                resolve(hash);
            });
        });
    });
};


export const comparePassword = (password, hash) => {
    return bcrypt.compare(password, hash);
};