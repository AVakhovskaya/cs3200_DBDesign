package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Appointment;
import org.springframework.data.repository.CrudRepository;

public interface CourseRepository
        extends CrudRepository<Appointment, Integer> {
}
