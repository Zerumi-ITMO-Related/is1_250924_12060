package io.github.zerumi.is1_250924_12060.repository

import io.github.zerumi.is1_250924_12060.entity.HumanBeingEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface ModelRepository : JpaRepository<HumanBeingEntity, Long>
