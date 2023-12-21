export const handleError = async (error, res) => {
  
    res.status(500).json({
      status: 'error',
      message: 'SERVER ERROR',
      error: error.toString()
    })
  }
export const handleResponse = (res, status, menssage_resp, data = {}) => {
    console.log(res, " Respuesta")
    console.log(status, " Estatus")
    console.log(menssage_resp, " Mensaje")
    console.log(data, " Datos")
    res.status(status).json({
      message: menssage_resp,
      data: data
    })
  }
  