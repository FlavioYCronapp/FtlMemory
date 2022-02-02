package app.entity;

import java.io.*;
import javax.persistence.*;
import java.util.*;
import javax.xml.bind.annotation.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonFilter;
import cronapi.rest.security.CronappSecurity;


/**
* Classe que representa a tabela FORMULA1
* @generated
*/
@Entity
@Table(name = "\"FORMULA1\"")
@XmlRootElement
@CronappSecurity
@JsonFilter("app.entity.formula1")
public class formula1 implements Serializable {

    /**
    * UID da classe, necessário na serialização
    * @generated
    */
    private static final long serialVersionUID = 1L;

    /**
    * @generated
    */
    @Id
    @Column(name = "id", nullable = false, insertable=true, updatable=true)
        private java.lang.String id = UUID.randomUUID().toString().toUpperCase();

    /**
    * @generated
    */
    @Column(name = "escuderia", nullable = true, unique = false, insertable=true, updatable=true)
        
        private java.lang.String escuderia;

    /**
    * @generated
    */
    @Column(name = "piloto", nullable = true, unique = false, insertable=true, updatable=true)
        
        private java.lang.String piloto;

    /**
    * Construtor
    * @generated
    */
    public formula1(){
    }

    /**
    * Obtém id
    * return id
    * @generated
    */
    
    public java.lang.String getId(){
        return this.id;
    }

    /**
    * Define id
    * @param id id
    * @generated
    */
    public formula1 setId(java.lang.String id){
        this.id = id;
        return this;
    }
    /**
    * Obtém escuderia
    * return escuderia
    * @generated
    */
    
    public java.lang.String getEscuderia(){
        return this.escuderia;
    }

    /**
    * Define escuderia
    * @param escuderia escuderia
    * @generated
    */
    public formula1 setEscuderia(java.lang.String escuderia){
        this.escuderia = escuderia;
        return this;
    }
    /**
    * Obtém piloto
    * return piloto
    * @generated
    */
    
    public java.lang.String getPiloto(){
        return this.piloto;
    }

    /**
    * Define piloto
    * @param piloto piloto
    * @generated
    */
    public formula1 setPiloto(java.lang.String piloto){
        this.piloto = piloto;
        return this;
    }

    /**
    * @generated
    */
    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (obj == null || getClass() != obj.getClass()) return false;
formula1 object = (formula1)obj;
        if (id != null ? !id.equals(object.id) : object.id != null) return false;
        return true;
    }

    /**
    * @generated
    */
    @Override
    public int hashCode() {
        int result = 1;
        result = 31 * result + ((id == null) ? 0 : id.hashCode());
        return result;
    }

}