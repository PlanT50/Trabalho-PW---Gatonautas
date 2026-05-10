package com.gatonautas.gatonautasapi.repository;

import com.gatonautas.gatonautasapi.model.EntradaDiario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EntradaDiarioRepository extends JpaRepository<EntradaDiario, Long> {
}
