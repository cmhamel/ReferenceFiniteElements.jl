@testset ExtendedTestSet "ElementStencils.jl - Quad4 implementation" begin
  @testset "Test Quad4 element interpolant points in element" begin
    for q_degree in [1, 2, 3, 4, 5, 6]
      e = ElementStencil(Quad4(), q_degree)

      @test e.coordinates[:, e.vertex_nodes[1]] ≈ [-1.0, -1.0]
      @test e.coordinates[:, e.vertex_nodes[2]] ≈ [1.0, -1.0]
      @test e.coordinates[:, e.vertex_nodes[3]] ≈ [1.0, 1.0]
      @test e.coordinates[:, e.vertex_nodes[4]] ≈ [-1.0, 1.0]
    end
  end  

  @testset "Test Quad4 element shape function partition of unity" begin
    for q_degree in [1, 2, 3, 4, 5, 6]
      partition_of_unity_tests(Quad4(), q_degree)
    end 
  end

  @testset "Test Quad4 element Kronecker delta property" begin
    for q_degree in [1, 2, 3, 4, 5, 6]
      kronecker_delta_property(Quad4(), q_degree)
    end
  end
end
