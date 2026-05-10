package com.gatonautas.gatonautasapi.controller;

import com.gatonautas.gatonautasapi.model.Voluntario;
import com.gatonautas.gatonautasapi.repository.VoluntarioRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/voluntarios")
public class VoluntarioController {

    private final VoluntarioRepository repository;

    public VoluntarioController(VoluntarioRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Voluntario> listarTodos() {
        return repository.findAll();
    }

    @PostMapping
    public ResponseEntity<?> salvar(@RequestBody Map<String, Object> body) {
        String nome      = (String) body.get("nome");
        String email     = (String) body.get("email");
        String planeta   = (String) body.get("planeta");
        String funcao    = (String) body.get("funcao");
        String motivacao = (String) body.get("motivacao");
        String resultado = (String) body.get("resultado");

        Integer pontuacao = null;
        Object p = body.get("pontuacao");
        if (p instanceof Number) pontuacao = ((Number) p).intValue();

        if (nome == null || email == null || funcao == null) {
            return ResponseEntity.badRequest().body(Map.of("erro", "Nome, email e função são obrigatórios"));
        }

        Voluntario voluntario = new Voluntario(nome, email, planeta, funcao, motivacao, pontuacao, resultado);
        return ResponseEntity.ok(repository.save(voluntario));
    }
}
