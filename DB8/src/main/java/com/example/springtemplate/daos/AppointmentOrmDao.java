package com.example.springtemplate.daos;

import com.example.springtemplate.models.Appointment;
import com.example.springtemplate.repositories.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class AppointmentOrmDao {
    @Autowired
    AppointmentRepository appointmentRepository;

    @PostMapping("/api/appointments")
    public Appointment createAppointment(@RequestBody Appointment appointment) {
        return appointmentRepository.save(appointment);
    }
    
    @GetMapping("/api/appointments")
    public List<Appointment> findAllAppointments() {

     return appointmentRepository.findAllAppointments();
    }

    @GetMapping("/api/appointments/{appointmentId}")
    public Appointment findAppointmentById(
            @PathVariable("appointmentId") Integer id) {
        return appointmentRepository.findAppointmentById(id);
    }



    @PutMapping("/api/appointments/{appointmentId}")
    public Appointment updateAppointment(
//         print("hello")
            @PathVariable("appointmentId") Integer id,
            @RequestBody Appointment newAppointment) {
        Appointment appointment = appointmentRepository.findAppointmentById(id);
        appointment.setPatientid(newAppointment.getPatientid());
        appointment.setPhysicianid(newAppointment.getPhysicianid());
        appointment.setDateOfAppointment(newAppointment.getDateOfAppointment());
        return appointmentRepository.save(appointment);
    }

    @DeleteMapping("/api/appointments/{appointmentId}")
    public void deleteAppointment(
            @PathVariable("appointmentId") Integer id) {
        appointmentRepository.deleteById(id);
    }
}