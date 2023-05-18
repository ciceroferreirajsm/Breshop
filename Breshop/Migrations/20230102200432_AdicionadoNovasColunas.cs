using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Breshop.Migrations
{
    public partial class AdicionadoNovasColunas : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DS_CEP",
                table: "Usuario",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DS_ENDERECO",
                table: "Usuario",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "NM_USUARIO",
                table: "Usuario",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "DS_TELEFONE",
                table: "Usuario",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IC_CARRINHO_DISPONIVEL",
                table: "Carrinho",
                nullable: false,
                defaultValue: false);

            migrationBuilder.CreateTable(
                name: "CarrinhoProduto",
                columns: table => new
                {
                    CD_CARRINHO_PRODUTO = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    ID_CARRINHO = table.Column<int>(nullable: false),
                    ID_PRODUTO = table.Column<int>(nullable: false),
                    QT_PRODUTO = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CarrinhoProduto", x => x.CD_CARRINHO_PRODUTO);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CarrinhoProduto");

            migrationBuilder.DropColumn(
                name: "DS_CEP",
                table: "Usuario");

            migrationBuilder.DropColumn(
                name: "DS_ENDERECO",
                table: "Usuario");

            migrationBuilder.DropColumn(
                name: "NM_USUARIO",
                table: "Usuario");

            migrationBuilder.DropColumn(
                name: "DS_TELEFONE",
                table: "Usuario");

            migrationBuilder.DropColumn(
                name: "IC_CARRINHO_DISPONIVEL",
                table: "Carrinho");
        }
    }
}
