package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import com.example.springtemplate.models.Prescriptions;
import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="appointments")
public class Appointment {
    private  Integer physicianid;
    private  Integer patientid;
    private Date dateofappointment;
    @OneToMany(mappedBy = "appointment")
    private List< Prescriptions > prescriptions;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    public List<Prescriptions> getPrescriptions() {
        return prescriptions;
    }
    public void setPrescriptions(List<Prescriptions> prescriptions) {
        this.prescriptions = prescriptions;
    }

    public Integer getId() { return id; }
    public void setId(Integer id) { this.id = id; }

    public Integer getPhysicianid() { return physicianid; }
    public void setPhysicianid(Integer physicianid) { this.physicianid= physicianid; }

    public Integer getPatientid() { return patientid; }
    public void setPatientid(Integer patientid) { this.patientid = patientid; }

    public Date getDateOfAppointment() { return dateofappointment; }
    public void setDateOfAppointment(Date dateofappointment) { this.dateofappointment = dateofappointment; }




    public Appointment(Integer patientid, Integer physicianid, Date dateofappointment,List<Prescriptions> prescriptions) {
        this.patientid = patientid;
        this.physicianid = physicianid;
        this.dateofappointment = dateofappointment;
        this.prescriptions = prescriptions;
    }

    public Appointment() {

    }
}


