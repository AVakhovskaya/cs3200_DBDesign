package com.example.springtemplate.repositories;

import com.example.springtemplate.models.Prescriptions;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface PrescriptionsRepository
        extends CrudRepository<Prescriptions, Integer> {
    @Query(value = "SELECT * FROM prescriptions",
            nativeQuery = true)
    public List<Prescriptions> findAllPrescriptions();
    @Query(value = "SELECT * FROM prescriptions WHERE id=:prescriptionId",
            nativeQuery = true)
    public Prescriptions findPrescriptionsByById(@Param("prescriptionId") Integer id);
}
