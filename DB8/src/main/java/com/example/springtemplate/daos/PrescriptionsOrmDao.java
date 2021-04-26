package com.example.springtemplate.daos;

import com.example.springtemplate.models.Prescriptions;
import com.example.springtemplate.repositories.PrescriptionsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class PrescriptionsOrmDao {
    @Autowired
    PrescriptionsRepository prescriptionsRepository;

    @PostMapping("/api/prescriptions")
    public Prescriptions createPrescription(@RequestBody Prescriptions prescriptions) {
        return prescriptionsRepository.save(prescriptions);
    }

    @GetMapping("/api/prescriptions")
    public List<Prescriptions> findAllPrescriptions() {
        return (List<Prescriptions>) prescriptionsRepository.findAllPrescriptions();
    }

    @GetMapping("/api/prescriptions/{prescriptionId}")
    public Prescriptions findPrescriptionsById(
            @PathVariable("prescriptionId") Integer id) {
        return prescriptionsRepository.findPrescriptionsByById(id);
    }

    @PutMapping("/api/prescriptions/{prescriptionId}")
    public Prescriptions updatePrescription(
            @PathVariable("prescriptionId") Integer id,
            @RequestBody Prescriptions newPrescriptions) {
        Prescriptions prescriptions = prescriptionsRepository.findPrescriptionsByById(id);
        prescriptions.setAppointmentid(newPrescriptions.getAppointmentid());
        prescriptions.setMedicinename(newPrescriptions.getMedicinename());
        prescriptions.setDateofrefill(newPrescriptions.getDateofrefill());
        return prescriptionsRepository.save(prescriptions);
    }

    @DeleteMapping("/api/prescriptions/{prescriptionId}")
    public void deletePrescription(
            @PathVariable("prescriptionId") Integer id) {
        prescriptionsRepository.deleteById(id);
    }
}