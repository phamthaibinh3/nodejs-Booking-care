import clinicService from "../services/clinicService";

let createNewClinic = async(req,res) => {
    try {
        let data = await clinicService.createNewClinic(req.body);
        return res.status(200).json(data)
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let getAllClinic = async(req,res) => {
    try {
        let data = await clinicService.getAllClinic();
        return res.status(200).json(data)
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

let getDetailClinicById = async(req,res) => {
    try {
        let data = await clinicService.getDetailClinicById(req.query.id);
        return res.status(200).json(data)
    } catch (e) {
        console.log(e);
        return res.status(500).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}

module.exports = {
    createNewClinic,
    getAllClinic,
    getDetailClinicById
}