package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Appointment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AppointmentRepository
        extends CrudRepository<Appointment, Integer> {
    @Query(value = "SELECT * FROM appointments",
            nativeQuery = true)
    public List<Appointment> findAllAppointments();


    @Query(value = "SELECT * FROM appointments WHERE id=:appointmentId",
            nativeQuery = true)
    public Appointment findAppointmentById(@Param("appointmentId") Integer id);

}
