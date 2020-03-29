const connection = require('../database/connection')
const crypto = require('crypto')


module.exports = {

    async delete(req, res) {
        const { id } = req.query

        const deleteOng = await connection('ongs').where('id', id).delete()

        return res.json({ id: id})
    },

    async index(req, res) {
        const ongs = await connection('ongs').select('*')

            return res.json(ongs)
    },


    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body

        const id = crypto.randomBytes(4).toString('HEX')
    
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
        return res.json({ id })
    }

}