// src/components/Register.jsx
import { useState } from 'react';

const Register = () => {
  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  // Estado para los errores de validación
  const [errors, setErrors] = useState({});
  
  // Estado para mensaje de éxito
  const [successMessage, setSuccessMessage] = useState('');

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar errores al escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validar el formulario
  const validateForm = () => {
    const newErrors = {};
    
    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Ingresa un email válido';
    }
    
    // Validar contraseña
    if (!formData.password) {
      newErrors.password = 'La contraseña es obligatoria';
    } else if (formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    
    // Validar confirmación
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simular registro exitoso (en una app real sería una llamada API)
      console.log('Datos enviados:', formData);
      setSuccessMessage('¡Registro exitoso!');
      setErrors({});
      
      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        setFormData({
          email: '',
          password: '',
          confirmPassword: ''
        });
        setSuccessMessage('');
      }, 3000);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow">
            <div className="card-body p-4">
              <h2 className="card-title text-center mb-4">Regístrate</h2>
              
              {/* Mensaje de éxito */}
              {successMessage && (
                <div className="alert alert-success text-center">
                  {successMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit} noValidate>
                {/* Campo Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                
                {/* Campo Contraseña */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength="6"
                  />
                  {errors.password && (
                    <div className="invalid-feedback">{errors.password}</div>
                  )}
                </div>
                
                {/* Campo Confirmar Contraseña */}
                <div className="mb-4">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirmar Contraseña
                  </label>
                  <input
                    type="password"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  {errors.confirmPassword && (
                    <div className="invalid-feedback">{errors.confirmPassword}</div>
                  )}
                </div>
                
                {/* Botón de envío */}
                <div className="d-grid">
                  <button 
                    type="submit" 
                    className="btn btn-dark"
                  >
                    Registrarse
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;