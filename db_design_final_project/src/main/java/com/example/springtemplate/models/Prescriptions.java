package com.example.springtemplate.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.xml.bind.v2.model.core.ID;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name="prescriptions")
public class Prescriptions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer appointmentid;
    private String medicinename;
    private Date dateofrefill;
    
    @ManyToOne
    @JsonIgnore
    private Prescriptions prescriptions;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getAppointmentid() {
        return appointmentid;
    }

    public void setAppointmentid(Integer appointmentid) {
        this.appointmentid = appointmentid;
    }

    public String getMedicinename() {
        return medicinename;
    }

    public void setMedicinename(String medicinename) {
        this.medicinename = medicinename;
    }

    public Date getDateofrefill() {
        return dateofrefill;
    }

    public void setDateofrefill(Date dateofrefill) {
        this.dateofrefill = dateofrefill;
    }

    public Prescriptions(Integer appointmentid, String medicinename, Date dateofrefill) {
        this.appointmentid = appointmentid;
        this.medicinename = medicinename;
        this.dateofrefill = dateofrefill;
    }

    public Prescriptions() {}

}
